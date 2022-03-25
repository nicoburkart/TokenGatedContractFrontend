import { Dispatch, SetStateAction, useState } from 'react';
import { SecondaryButton } from './Buttons';

type Props = {
  label: string;
  items: Item[];
  onUpdate: Dispatch<SetStateAction<number>>;
  className?: string;
};

type Item = {
  label: string;
  price: number;
};

export const InputDropDown = ({ className, label, items, onUpdate }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const updateSelectedItem = (index: number) => {
    const item = items[index];
    setSelectedItem(item);
    setIsOpen(false);
    onUpdate(index);
  };

  return (
    <div className=" relative w-full">
      <div className="flex flex-col">
        <label className="text-sm font-light text-zinc-600 mb-3">{label}</label>
        <SecondaryButton
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between text-base font-normal text-left"
        >
          {selectedItem.label}
          <span className="flex items-center text-sm font-light text-zinc-400">
            {selectedItem.price + ' ETH'}
            <svg
              className="ml-1 hidden sm:block"
              width="20"
              height="20"
              fill="text-zinc-800"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
            </svg>
          </span>
        </SecondaryButton>
      </div>
      {isOpen && (
        <div className="w-full z-10 overflow-hidden origin-top-right absolute right-0 mt-2 rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="divide-y divide-gray-100"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {items.map((item, index) => {
              return (
                <a
                  key={item.label}
                  onClick={() => updateSelectedItem(index)}
                  className={`text-zinc-800 text-left flex items-center justify-between hover:bg-zinc-100 px-8 py-8 md:py-4 cursor-pointer font-normal font-poppins'`}
                  role="menuitem"
                >
                  {item.label}
                  <span className="text-sm font-light text-zinc-400">
                    {item.price} ETH
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
