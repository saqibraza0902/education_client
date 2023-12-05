import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Decrement, DeleteProduct, Increament } from "@/store/slices/cart/cart";
import { useAppDispatch } from "@/hooks/hooks";
import { BsTrash } from "react-icons/bs";
import ImageWithFallback from "@/utils/Imgwithfallback";
interface Product {
  desc: string;
  image: string;
  price: number;
  rating: number;
  title: string;
  writer: string;
  _id: string;
  qnty: number;
}
interface Props {
  item: Product;
}
export const CartComponent = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  const truncateStyle: any = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: 2,
    lineClamp: 2,
  };
  const handleAdd = (id: string) => {
    dispatch(Increament(id));
  };
  const handleSub = (id: string) => {
    dispatch(Decrement(id));
  };
  const handleDelete = (id: string) => {
    dispatch(DeleteProduct(id));
  };
  return (
    <div className="bg-white w-72 flex flex-col  p-4">
      <div className="flex justify-center">
        <ImageWithFallback src={item.image} className="w-full" alt="book" />
      </div>
      <div className="flex !justify-between items-center py-3">
        <span className="text-base font-semibold transition-all duration-500 cursor-pointer text-[#002147] hover:text-[#fdc800]">
          {item.title}
        </span>
        <span className="px-3 py-1 text-sm rounded-full bg-[#fdc800] font-medium">
          ${item.price * item.qnty}
        </span>
      </div>
      <div className="w-60">
        <p style={truncateStyle}>{item.desc}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <i
            onClick={() => handleSub(item._id)}
            className="p-2 bg-[#fdc800] rounded-full cursor-pointer"
          >
            <AiOutlineMinus />
          </i>
          <span>{item.qnty}</span>
          <i
            className="p-2 bg-[#fdc800] rounded-full cursor-pointer"
            onClick={() => handleAdd(item._id)}
          >
            <AiOutlinePlus />
          </i>
        </div>
        <div>
          <i className=" cursor-pointer">
            <BsTrash
              size={25}
              color="#002147"
              onClick={() => handleDelete(item._id)}
            />
          </i>
        </div>
      </div>
    </div>
  );
};
