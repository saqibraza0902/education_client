import React, { useState } from 'react'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi'
import { motion } from "framer-motion";
const Accordion = ({ ques, ans }) => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <div className="accordion" id="accordionExample">
                <div className=" bg-white lg:w-1/2 py-3">
                    <motion.div layout onClick={() => setShow(!show)} className="w-full mb-0">
                        <button className="text-start relative flex items-center font-normal w-full text-base text-gray-800 bg-white rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <i className='text-[#666666] mr-3'><HiOutlineQuestionMarkCircle /></i>
                            {ques}
                        </button>
                    </motion.div>
                    <motion.div layout
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            closed: { opacity: 0, height: 0 },
                        }}
                        initial="closed"
                        animate={show ? "open" : "closed"}
                        transition={{ duration: 0.8 }}
                        style={{ overflow: "hidden" }}
                        className='w-full ml-2 pb-0'>
                        <div >
                            <div className="accordion-body text-[#8a8a8a] text-sm text-justify pb-0">
                                {ans}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Accordion
