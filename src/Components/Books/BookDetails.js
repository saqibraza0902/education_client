import React, { useEffect, useState } from 'react'
import Footer from '../GlobalComponents/Footer'
import Navbar from '../GlobalComponents/Navbar'
import courses_bg from '../../Images/Banners/others_bg.jpg'
import { useLocation, useParams } from 'react-router-dom'
import { RatingStar } from "rating-star";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FeedBookActions } from '../../Redux/Actions/Actions'
import api from '../../AxiosInstance/api'
import { AddToCart } from '../../Redux/Actions/Actions'

const BookDetails = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const AllBooks = useSelector(state => state.book.feedBooks)
    const cartProducts = useSelector(state => state.cart.cart)
    const [count, setCount] = useState(1)
    const { title, writer, price, desc, rating, image } = location.state.item
    const { index } = useParams()
    const items = { ...location.state.item, count }
    useEffect(() => {
        const getBooks = async () => {
            try {
                const { data } = await api.get("/book/feed-books")
                // console.log(data)
                dispatch(FeedBookActions(data))
            } catch (error) {
                console.log(error)
            }
        }
        getBooks()
    }, [dispatch])
    const toDetailComponent = (title, item) => {
        navigate(`/shop/${title}`, { state: { item } })
    }
    // const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/shop/${index}`)
    }
    console.log(cartProducts)

    const handleCountClick = (operation) => {
        if (operation === 'sub' && count >= 2) {
            setCount(count - 1)
        }
        if (operation === 'add' && count >= 0) {
            setCount(count + 1)
        }
    }
    const AddtoCart = () => {
        dispatch(AddToCart(items))
    }
    return (
        <div>
            <Navbar />
            <section className='h-[50vh] lg:h-[90vh]' style={{
                backgroundImage: `url(${courses_bg})`,
                backgroundPosition: 'center center ', backgroundSize: "cover", backgroundRepeat: "no-repeat"
            }}>
                <div className='flex justify-center items-center h-full'>
                    <h1 className='text-white text-3xl lg:text-6xl '>Book Details</h1>
                </div>
            </section>
            <section>
                <div className='mx-10 flex flex-col lg:flex-row gap-5 py-20'>
                    <div className='w-full md:h-[40vh] lg:h-[70vh] flex justify-center items-center bg-[#e6e6e6]'>
                        <img className='text-center h-min' src={image} alt='' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <h1 className='text-[#002147]'>{title}</h1>
                        <div>
                            <span className='text-justify text-[#8a8a8a]'>{desc}</span>
                        </div>
                        <div className='flex gap-3'>
                            <span>Writer:</span>
                            <span className='text-[#002147] font-semibold'>{writer}</span>
                        </div>
                        <div className='flex gap-3'>
                            <span>Price:</span>
                            <span className='text-[#002147] font-semibold'>{price}</span>
                        </div>
                        <div className='flex items-center'>
                            <span>Rating:</span>
                            <RatingStar id="different-maximum-score" rating={rating} maxScore={100} />
                        </div>
                        <div className='flex lg:items-center lg:gap-5 flex-col lg:flex-row '>
                            <div className='flex gap-2 h-min items-center'>
                                <span className='bg-[#f0f0f0] py-2 px-3 text-xl cursor-pointer' onClick={() => handleCountClick('sub')}><AiOutlineMinus /></span>
                                <span className='bg-[#ffffff] py-2 px-3 text-xl font-semibold'>{count}</span>
                                <span className='bg-[#f0f0f0] py-2 px-3 text-xl cursor-pointer' onClick={() => handleCountClick('add')}><AiOutlinePlus /></span>
                            </div>
                            <div>
                                <button className='my-4 w-36 px-4 py-2 bg-[#002147] text-[#fdc800] font-semibold' onClick={() => AddtoCart(location.state.item)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#f6f6f6] py-20 px-10'>
                <div className='flex flex-col justify-center items-center h-full'>
                    <h1 className='text-[#002147] text-2xl lg:text-4xl '>Our Shop</h1>
                    <p className='leading-8 text-center'>Belis nisl adipiscing sapien sed malesu diame lacus eget erat  Cras mollis scelerisqu <br></br>Nullam arcu liquam here was consequat.</p>
                </div>
                <div className='grid mt-5 grid-cols-1 justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {AllBooks?.map((item, index) => (
                        <div className='mx-2' key={index} onClick={() => toDetailComponent(item.title, item)}>
                            <div className='w-max pr-4 bg-white py-4 '>
                                <img src={item.image} alt='' />
                                <div className='mx-3 my-2 '>
                                    <h1 className='text-lg font-bold text-[#444444] !font-sans'>{item.title}</h1>
                                    <span className='text-sm '>Writer:
                                        <span className='font-bold ml-2'>{item.writer}</span>
                                    </span>
                                    <div className='flex items-center'>
                                        <span className='flex gap-2'>
                                            <span className='text-[#777777] font-semibold'>Price:</span>
                                            <span className='text-[#f6393e] font-bold text-base'>{item.price}</span>
                                        </span>
                                        <span><RatingStar id="different-maximum-score" rating={item.rating} maxScore={100} /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* <p>Helllo</p> */}
            <section>
                <Footer />
            </section>
        </div>
    )
}

export default BookDetails
