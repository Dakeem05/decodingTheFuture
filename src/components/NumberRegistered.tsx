"use client";

import { useGlobalState } from "@/context/GlobalStateContext";

export default function NumberRegistered() {
  const { count, isLoading } = useGlobalState();

  if (isLoading) {
    return (
      <div className="">
        <p className="text-white font-xeroda mt-2 text-center lg:text-left">
          Fetching data...
        </p>
      </div>
    );
  }
  return (
    <div>
      <p className="text-white font-xeroda mt-2 text-center lg:text-left">
        {count === 0 ? "" : `${count + 100} people have registered for this event.`}
      </p>
    </div>
  );
}
