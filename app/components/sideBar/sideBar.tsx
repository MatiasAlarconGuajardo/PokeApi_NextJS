import { ReactNode, MouseEvent } from 'react';

const Sidebar = ({ children, isOpen, onClose }: { children: ReactNode, isOpen: boolean, onClose: (event: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void }) => {
  if (!isOpen) {
    return null;
  } else {
    return (
      <div className='fixed inset-0 z-10 bg-gray-500 bg-opacity-75 transition-opacity' onClick={onClose}>
        <div className='flex flex-row justify-center z-10 h-full w-full overflow-y-auto items-center xl:justify-end'>
          <div className='justify-center pointer-events-none flex bg-white w-auto h-auto overflow-y-auto xl:w-6/12 xl:w-2/6 ' onClick={e => e.stopPropagation()}>
            <p className='text-colorclose text-3xl font-bold border-none cursor-pointer flex ml-4 mt-px mb-0 h-7 w-7' onClick={onClose}><b>&times;</b></p>
            
              {children}
             
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
