import { useEffect, useRef } from "react";

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
  maxRounds: number;
  onMaxRoundsChange: (rounds: number) => void;
}

function Settings({
  isOpen,
  onClose,
  maxRounds,
  onMaxRoundsChange,
}: SettingsProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  const handleRoundsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onMaxRoundsChange(parseInt(event.target.value));
  };

  return (
    <dialog
      ref={dialogRef}
      className="backdrop:bg-black backdrop:bg-opacity-50 bg-neutral-800 text-white rounded-2xl shadow-2xl border border-neutral-700 p-0 fixed inset-0 m-auto max-w-md max-h-fit"
      onClose={handleClose}
    >
      <div className="p-8 min-w-[400px]">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Settings</h1>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white text-2xl leading-none"
            aria-label="Close settings"
          >
            ×
          </button>
        </div>

        <div className="space-y-6">
          {/* Rounds Configuration */}
          <div className="flex flex-row justify-between items-center">
            <label htmlFor="rounds-select" className="text-lg font-medium">
              Number of Rounds
            </label>
            <select
              id="rounds-select"
              value={maxRounds}
              onChange={handleRoundsChange}
              className="bg-neutral-700 border border-neutral-600 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
              <option value={3}>3 Rounds</option>
              <option value={5}>5 Rounds</option>
              <option value={7}>7 Rounds</option>
              <option value={10}>10 Rounds</option>
              <option value={15}>15 Rounds</option>
            </select>
          </div>

          {/* Game Info */}
          <div className="border-t border-neutral-600 pt-4">
            <h3 className="text-lg font-medium mb-2">Game Info</h3>
            <p className="text-sm text-gray-300">
              Try to match the target color as closely as possible. Your score
              is based on how similar your guess is to the target color.
            </p>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <button
            onClick={handleClose}
            className="bg-pink-300 hover:bg-pink-400 text-neutral-800 px-6 py-2 rounded-lg transition-colors"
          >
            Save & Close
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default Settings;
