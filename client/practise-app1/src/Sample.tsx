import React, { useState } from 'react';

interface ItemCounts {
  [itemName: string]: number;
}

export const Sample: React.FC = () => {
  const [itemCounts, setItemCounts] = useState<ItemCounts>({});

  const handleItemClick = (itemName: string) => {
    setItemCounts(prevCounts => ({
      ...prevCounts,
      [itemName]: (prevCounts[itemName] || 0) + 1
    }));
  };

  return (
    <div>
      <button onClick={() => handleItemClick("Apple")}>Add Apple</button>
      <button onClick={() => handleItemClick("Banana")}>Add Banana</button>
      <button onClick={() => handleItemClick("Orange")}>Add Orange</button>

      <h2>Item Counts</h2>
      <ul>
        {Object.entries(itemCounts).map(([itemName, count]) => (
          <li key={itemName}>{itemName}: {count}</li>
        ))}
      </ul>
    </div>
  );
}

