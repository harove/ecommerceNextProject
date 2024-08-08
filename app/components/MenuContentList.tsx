import React from "react";

interface MenuContentListProps {
  open: boolean;
  handleClose: () => void;
}

const MenuContentList = ({ open, handleClose }: MenuContentListProps) => {
  return (
    <div
      className={`${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-all fixed inset-0 bg-black/50 flex justify-end`}
    >
      <aside className="w-48 bg-gray-500">
        <div
          className="text-white text-right p-4 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
        >
          x
        </div>
        <nav className="flex flex-col mt-4 gap-3 px-3">
          <a href="#" className="text-white p-2">Item 1</a>
          <a href="#" className="text-white p-2">Item 2</a>
          <a href="#" className="text-white p-2">Item 3</a>
        </nav>
      </aside>
    </div>
  );
};

export default MenuContentList;
