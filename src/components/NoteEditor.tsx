import { useState } from "react";

import ReactCodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

export const NoteEditor = ({
  onSave,
}: {
  onSave: (note: { title: string; content: string }) => void;
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Titulo de la nota"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <ReactCodeMirror
        minHeight="30vh"
        minWidth="100%"
        value={content}
        extensions={[
          markdown({ base: markdownLanguage, codeLanguages: languages }),
        ]}
        onChange={(value) => setContent(value)}
      />
      <button
        onClick={() => {
          onSave({ title, content });
          setContent("");
          setTitle("");
        }}
        disabled={title.trim().length === 0 || content.trim().length === 0}
      >
        Guardar
      </button>
    </div>
  );
};
