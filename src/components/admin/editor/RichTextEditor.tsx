'use client';

import dynamic from 'next/dynamic';
import { EditorState, convertToRaw } from 'draft-js';
import { useState } from 'react';
import draftToHtml from 'draftjs-to-html';
import axios from 'axios';

const Editor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor), {
  ssr: false,
});

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function RichTextEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleSubmit = async () => {
    const rawContent = convertToRaw(editorState.getCurrentContent());
    const htmlContent = draftToHtml(rawContent);

    try {
      await axios.post('http://localhost:5000/api/posts', { content: htmlContent });
      alert('Content saved successfully!');
    } catch (error) {
      console.error('Error saving content:', error);
    }
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        toolbar={{
          options: ['inline', 'blockType', 'list', 'textAlign', 'link', 'history'],
        }}
      />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}
