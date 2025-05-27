import ContactItem from '../ContactItem';
import Introduce from './Introduce';

import { DataProps } from '@/types';

const Information = ({ information }: Pick<DataProps, 'information'>) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2"></div>
      <div className="flex items-center">
        <img className="w-40 h-40 rounded-full mr-4" src="/images/me_blue.png" alt="my_blue_img" />

        <div className="flex flex-col w-full">
          <div className="hidden md:inline-block relative rounded-br-3xl rounded-tr-3xl rounded-bl-3xl z-20 bg-transparent origin-top-left w-fit bg-white dark:bg-BLACK">
            <h2 className="leading-[1.15] text-3xl lg:text-[40px] relative px-4 z-20 inline-block">
              안녕하세요,
              <br /> 백엔드 개발자 
              <span className="text-PRIMARY selection:bg-PRIMARY_LIGHT font-semibold">
                 {' '+information.name}
              </span>
              입니다.
            </h2>
          </div>
          <div>
            <span className="inline-block leading-[1.15] font-semibold py-2 text-4xl lg:text-[40px] relative px-4 z-20 md:hidden">
              안녕하세요,
              <br /> 백엔드 개발자<br />
              <span className="text-PRIMARY selection:bg-PRIMARY_LIGHT font-semibold">
                {information.name}
              </span>
              입니다.
            </span>
          </div>
          <div className="flex px-4 gap-1">
            {information.contact.map(contact => (
              <ContactItem
                key={contact.id}
                className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
                {...contact}
              >
                {contact.name}
              </ContactItem>
            ))}
          </div>
        </div>
      </div>
      <Introduce markdown={information.markdown} />
    </div>
  );
};

export default Information;
