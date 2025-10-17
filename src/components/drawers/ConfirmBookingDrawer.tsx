'use client';
import { useState } from 'react';
import { Drawer, DatePicker} from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import { BookingDrawerProps } from '@/types/types';
// import { setServers } from 'dns';

const { RangePicker } = DatePicker;

export default function ConfirmBookingDrawer({
  open,
  onClose,
  location,
  services,
  setServices,
  setOpen
}: BookingDrawerProps) {
  const [dates, setDates] = useState<[Dayjs, Dayjs] | null>(null);

  const nights = dates && dates[0] && dates[1] ? dates[1].diff(dates[0], 'day') : 0;

  const handleConfirm = () => {
    console.log({
      location,
      services,
      checkIn: dates?.[0]?.format('YYYY-MM-DD'),
      checkOut: dates?.[1]?.format('YYYY-MM-DD'),
      nights,
    });
    onClose();
  };
  const checkin = dates?.[0]?.format('YYYY-MM-DD');
  const checkout = dates?.[1]?.format('YYYY-MM-DD');

  return (
    <Drawer
      placement="right"
      rootClassName="custom-drawer"
      open={open}
      onClose={onClose}
      closable={false}
      title={
        <div className="flex flex-col space-y-10">
          <div className="flex items-center justify-between w-full">
            { services && (

                    <Image 
                    onClick={() =>{
                     setServices(null)
                     setOpen(true)
                    }}
                    src={'/arrow-forward.svg'} alt="arrow icon" width={15} height={15} className="rotate-[180deg] cursor-pointer" />
            )}
            <span className="font-semibold">
              {location} / {services}
            </span>
            {/* Custom close button if you want an icon */}
            <AiOutlineClose className="cursor-pointer" size={20} onClick={onClose} />
          </div>
           {dates && nights > 0 && (
          <div className="flex">
            
            <div className="bg-[#AD783C] text-[16px] rounded-l flex flex-col items-center text-white p-2">
              <p>Check In</p>
              {checkin}
            </div>
            <div className="bg-black text-[16px] rounded-r flex flex-col items-center text-white p-2">
              <p>Check Out</p>
              {checkout}
            </div>
          </div>
          )}
        </div>
      }
    >
      <div className="space-y-4">
        <RangePicker
          style={{ width: '100%' }}
          onChange={(values) => setDates(values as [Dayjs, Dayjs])}
          defaultPickerValue={[dayjs(), dayjs()]}
          onPanelChange={(val,mode) =>{
            if(mode[0] === 'date' && mode[1] === 'date' && val[0] && val[1]){
              setDates([val[0], val[1]]);
            }
          }}
          disabledDate={(current) => current && current < dayjs().startOf('day')}
          className="custom-calendar"
        />
        <div className="flex justify-between items-center pt-[8em]">
          {nights > 0 && (
            <p className="font-semibold text-[20px]">
              {nights} {nights === 1 ? 'Night' : 'Nights'}
            </p>
          )}

          <button
            disabled={!dates}
            onClick={handleConfirm}
            className="bg-[#802000] text-white font-semibold rounded flex p-3 disabled:cursor-not-allowed cursor-pointer"
          >
            Confirm Booking
            <Image
              src={'/arrow-forward.svg'}
              alt="arrow icon"
              width={15}
              height={15}
              className="ml-2"
            />
          </button>
        </div>
      </div>
    </Drawer>
  );
}
