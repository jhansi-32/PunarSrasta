import { useState } from "react";

export default function WasteScanner({ onResult }: { onResult: (result: any) => void }) {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!image) return;
    setLoading(true);

    // Simulate image name sending
    const res = await fetch("http://localhost:54321/functions/v1/recognize-waste", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageName: image.name }),
    });

    const result = await res.json();
    onResult(result);
    setLoading(false);
  };

  return (
    <div className="p-4 border rounded-lg shadow">
      <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} />
      <button onClick={handleUpload} disabled={!image || loading} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </div>
  );
}
