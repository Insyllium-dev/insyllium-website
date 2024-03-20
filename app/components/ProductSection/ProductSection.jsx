import Image from "next/image";
import Lamp from "../ui/Lamp";
import { insylink } from "../../../public";
import Link from "next/link";
import Button from "../Button";

const ProductSection = () => {
  return (
    <>
      <Lamp>
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl lg:text-7xl font-semibold lg:leading-[5rem] text-white capitalize font-poppins">
            our product
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col gap-8 w-full md:w-1/2 relative">
            {/* <div className="turqouise__gradient w-full h-1/2 absolute top-20" /> */}
            <p className="font-poppins font-medium text-3xl text-white">
              Insylink
            </p>
            <p className="font-poppins font-normal text-lg text-gray-300">
              Introducing Insylink, the ultimate restaurant Point of Sale (POS)
              system designed for modern dining establishments. With its
              intuitive interface, Insylink streamlines operations, from order
              management to inventory control, ensuring efficiency and
              organization. The user-friendly touch-screen interface makes order
              entry a breeze, while real-time analytics empower informed
              decision-making.
            </p>
            <Button
              url={"https://www.insylink.com"}
              className="font-poppins font-medium text-[17px] text-white bg-[#46a2aa] px-4 py-2 rounded-lg w-max"
            >Learn more</Button>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={insylink}
              width={500}
              height={500}
              className="object-contain rounded-xl"
            />
          </div>
        </div>
      </Lamp>
    </>
  );
};

export default ProductSection;
