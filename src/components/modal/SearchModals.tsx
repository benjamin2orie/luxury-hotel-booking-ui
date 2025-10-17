'use client';
import React, { useState } from 'react';
import { Button, Flex, Modal } from 'antd';
import Image from 'next/image';
const MSearch = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="searchModal">
      <Flex vertical gap="middle" align="flex-start">
        <div onClick={() => setOpen(true)} className="flex items-center gap-2 cursor-pointer">
          <Image src={'/search-icon.svg'} alt="logo" width={15} height={15} />
          Search
        </div>
        <Modal
          centered
          open={open}
          // onOk={() => setOpen(false)}
          // onCancel={() => setOpen(false)}
          width={1000}
          height={5}
        >
          <input type="text" placeholder="search" className="text-red-500 bg-black" />
        </Modal>
      </Flex>
    </div>
  );
};

export default MSearch;
