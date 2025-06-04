// components/admin/editor/JoditEditor.tsx
"use client";

import React, { useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

interface EditorProps {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

const Editor = ({ value, onChange, placeholder = "Start typing..." }: EditorProps) => {
  const editor = useRef(null);

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder
    }),
    [placeholder]
  );

  return (
    <JoditEditor
      ref={editor}
      value={value}
      config={config}
      tabIndex={1}
      onBlur={(newContent) => onChange(newContent)}
      onChange={() => {}}
    />
  );
};

export default Editor;
