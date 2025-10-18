'use cient';
import React, { useState,ReactNode } from 'react';
import {Drawer, Modal, Select } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { IoChevronDown } from 'react-icons/io5';
import ConfirmBookingDrawer from './ConfirmBookingDrawer';
import DrawerButton from '../DrawerButton';


interface MenuDrawerPropss {
  children?: ReactNode;
}

const MenuDrawer: React.FC = ({children}:MenuDrawerPropss) => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);

  const [location, setLocation] = useState<string | null>(null);
  const [services, setServices] = useState<string | null>(null);
  // const [guests, setGuests] = useState<number | null>(null);
  //   const [dates, setDates] = useState<[Dayjs, Dayjs] | null>(null);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const handleLocationClick = () => setIsModalOpen(true);
  const handleLocationSelect = (value: string) => {
    setServices(null);
    setLocation(value);
    setIsModalOpen(false);
  };

  const handleServiceSelect = (value: string) => {
    setServices(value);
    setRightDrawerOpen(true);
    setOpen(false);
  };

  // const handleGuestsSelect = (value: number) => {
  //   setGuests(value);
  //   setRightDrawerOpen(false);
  // };

  //   const handleConfirmBooking = () =>{
  //     console.log({location, services, guests, dates});
  //     setOpen(false);
  //     setLocation(null);
  //     setServices(null);
  //     setGuests(null);
  //     setDates(null);
  //     setRightDrawerOpen(false);
  //   }

  return (
    <div>
        {children}

      <DrawerButton
      className="flex items-center gap-2 cursor-pointer"
       onClick={showDrawer} >
        <Image src={'/menu.svg'} alt="logo" width={20} height={20} />
       </DrawerButton>
      <Drawer
        rootClassName="desktop"
        placement="left"
        title={
          <Link href={'/'}>
            <Image src={'/footer-logo.svg'} alt="logo" width={80} height={80} />
          </Link>
        }
        closable={{ 'aria-label': 'Close Button' }}
        onClose={onClose}
        open={open}
      >
        <div className="space-y-4">
          <button
            className="text-[25px] text-white flex items-center w-[100%] gap-10"
          >
            Location
            <IoChevronDown
            onClick={handleLocationClick}
             className="cursor-pointer" />
          </button>

          {location && !services && (
            <div>
              <Select
                placeholder="Select Service"
                style={{ width: '100%' }}
                onChange={handleServiceSelect}
                options={[
                  { value: 'Dine', label: 'Dine' },
                  { value: 'Stay', label: 'Stay' },
                  { value: 'Event', label: 'Event' },
                  { value: 'Space', label: 'Space' },
                ]}
              />
            </div>
          )}
        </div>
      </Drawer>

      <Modal
        title="Select Location"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Select
          placeholder="Choose a location"
          style={{ width: '100%' }}
          onChange={handleLocationSelect}
          options={[
            { value: 'Lagos', label: 'Lagos' },
            { value: 'Abuja', label: 'Abuja' },
            { value: 'Portharcourt', label: 'Port Harcourt' },
          ]}
        />
      </Modal>

      {/* Right Drawer (Calendar) */}
      {/* <Drawer
         title={location && services ? `${location} / ${services}` : 'Select Dates'}
        placement="right"
        open={rightDrawerOpen}
        onClose={() => setRightDrawerOpen(false)}
      >
        <RangePicker
          style={{ width: '100%' }}
          onChange={(values) => setDates(values)}
          disabledDate={(current) => current && current < dayjs().startOf('day')}
        />

        <Button
          type="primary"
          className="mt-4"
          block
          disabled={!dates}
          onClick={handleConfirmBooking}
        >
          Confirm Booking
        </Button>
      </Drawer> */}
      <ConfirmBookingDrawer
        open={rightDrawerOpen}
        onClose={() => setRightDrawerOpen(false)}
        location={location}
        services={services}
        setServices={setServices}
        setOpen={setOpen}
      />
    </div>
  );
};

export default MenuDrawer;
