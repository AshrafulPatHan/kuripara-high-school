'use client';

import dynamic from 'next/dynamic';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { useEffect, useState } from 'react';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

const Editor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor), {
  ssr: false,
});

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

type RichTextEditorProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // যদি বাইরের value পরিবর্তন হয়, তাহলে editorState সেট করো
  useEffect(() => {
    if (value) {
      const blocksFromHtml = htmlToDraft(value);
      const contentState = ContentState.createFromBlockArray(
        blocksFromHtml.contentBlocks,
        blocksFromHtml.entityMap
      );
      setEditorState(EditorState.createWithContent(contentState));
    }
  }, [value]);

  // ------ documantation
  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
    const rawContent = convertToRaw(state.getCurrentContent());
    const html = draftToHtml(rawContent);
    onChange(html);
  };
  


  return (
    <div  
    >
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        toolbar={{
          options: ['inline', 'blockType', 'list', 'textAlign', 'link', 'history'],
        }}
      />
    </div>
  );
}
