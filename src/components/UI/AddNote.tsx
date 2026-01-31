import { useState } from "react";
import { saveNotes } from "../../storage";
import type { AddNoteProps } from "../../types";

export const AddNote = ({ id, artworkId }: AddNoteProps) => {
  const [note, setNote] = useState("");
  const [isReadOnly, SetIsReadOnly] = useState(false);
  const handleSave = () => {
    saveNotes(artworkId, note);
    SetIsReadOnly(true);
  };
  const handleEdit = () => {
    SetIsReadOnly(false);
  };
  return (
    <>
      {/* The checkbox 'id' must match the label's 'htmlFor' */}
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box flex flex-col gap-2">
          <label htmlFor={id} className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">Add Notes</h3>
          <textarea placeholder="Enter your notes here." value={note} className="w-full h-15 border-2 " onChange={(e) => setNote(e.currentTarget.value)} disabled={isReadOnly}></textarea>
          <div className="modal-action">
            <button key={id} className="btn" onClick={handleEdit}>
              Edit
            </button>
            <button key={id} className="btn" onClick={handleSave} disabled={isReadOnly}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
