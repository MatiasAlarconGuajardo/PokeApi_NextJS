import { ReactNode, MouseEvent } from 'react';


const Sidebar = ({children,isOpen,onClose}: {children: ReactNode,isOpen:boolean,onClose: (event: MouseEvent<HTMLButtonElement|HTMLDivElement>) => void}) => {
  if (!isOpen) {
    return null;
  }
  else{
    return (
      <div className='fixed  inset-0 z-10 bg-gray-500 bg-opacity-75 transition-opacity"' onClick={onClose}>
      <div className=' float-end z-10  w-4/12 overflow-y-auto sm:fixed md:fixed' >
          <div className='justify-center pointer-events-none fixed inset-y-0 right-0 flex max-w-full bg-white w-3/12' onClick={e=>e.stopPropagation()}>
  
          <p className='text-colorclose text-3xl font-bold border-none cursor-pointer flex ml-4 mt-px mb-0 h-7 w-7'  onClick={onClose}><b>&times;</b></p>
          
          {children}
              
          </div>
      </div>
  </div>
    );
  }
}  
 
export default Sidebar;