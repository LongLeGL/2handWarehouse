import {PaypalButons} from '@paypal/react-paypal-js'
import SuccessSVG from '../icons/success.svg'
import RecommendItem from './components/RecommendItem'


const RecItemInfo = [
    {
        name:"Bucklo Wrop Wooden Table",
        price:"$69.36",
        location:"TP. Hồ Chí Minh",
        image:"https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7c1763bd/images/2010000/2014279.jpg?sfrm=jpg"
    },
    {
        name:"Bucklo Wrop Wooden Table",
        price:"$69.36",
        location:"TP. Hồ Chí Minh",
        image:"https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7c1763bd/images/2010000/2014279.jpg?sfrm=jpg"
    },
    {
        name:"Bucklo Wrop Wooden Table",
        price:"$69.36",
        location:"TP. Hồ Chí Minh",
        image:"https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7c1763bd/images/2010000/2014279.jpg?sfrm=jpg"
    },
    {
        name:"Bucklo Wrop Wooden Table",
        price:"$69.36",
        location:"TP. Hồ Chí Minh",
        image:"https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7c1763bd/images/2010000/2014279.jpg?sfrm=jpg"
    },
    {
        name:"Bucklo Wrop Wooden Table",
        price:"$69.36",
        location:"TP. Hồ Chí Minh",
        image:"https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7c1763bd/images/2010000/2014279.jpg?sfrm=jpg"
    },
]


export default function CheckoutResult() {
    return (
        <>
            <div className='w-full h-screen flex flex-col items-center justify-center'>
                <div className='mb-[30px] flex flex-col items-center'>
                    <img 
                        src={SuccessSVG}
                        className='mb-[30px]'
                        alt='checkout icon'
                    />
                    <div className='mb-[30px]'>
                        Transaction is successful!
                    </div>
                    <button>
                        View Receipt 
                    </button>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='mb-[20px] text-3xl font-light text-[#1d1f1f]'>
                        Other Products You Might Love
                    </div>
                    <div className='flex justify-center gap-[10px]'>
                        {RecItemInfo.map((item,index) => {
                            return(
                                <div className='' key={index}>
                                    <RecommendItem props={item}/>
                                </div>
                            )
                        })
                    }
                    </div>  
                </div>
            </div>
        </>)
}