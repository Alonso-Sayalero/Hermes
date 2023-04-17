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
        className="mb-3 w-full"
        type="text"
        placeholder="Titulo de la nota"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <ReactCodeMirror
        className="mb-3"
        minHeight="30vh"
        minWidth="100%"
        value={content}
        extensions={[
          markdown({ base: markdownLanguage, codeLanguages: languages }),
        ]}
        onChange={(value) => setContent(value)}
      />
      {!(title.trim().length === 0 || content.trim().length === 0) && (
        <button
          className="rounded border bg-sky-200 px-5 py-3"
          onClick={() => {
            onSave({ title, content });
            setContent("");
            setTitle("");
          }}
        >
          Guardar
        </button>
      )}
    </div>
  );
};
