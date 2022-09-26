// import Styles from '../styles/BottomNav.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { RiHomeSmile2Line, RiHomeSmile2Fill, RiSearchEyeFill } from 'react-icons/ri'
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { RiUser5Line, RiUser5Fill } from 'react-icons/ri'

const BottomNav = (props) => {


    // const contentStyle = {
    //     minHeight: "90vh",
    //     top: "56px",
    //     backgroundColor: "#f1f1f9",
    //     overflowX: "hidden"
    // }
    
    const router = useRouter()
    const [activeTabs, setActiveTabs] = useState(props.name)
    useEffect(() => {
        switch (activeTabs) {
            case 'home':
                router.push('/')
                break;
            case 'indonesia':
                router.push('/indonesia')
                break;
            case 'saved':
                router.push('/saved')
                break;
            case 'account':
                router.push('/account')
                break;
            default:
                router.push('/')
                break;
        }
    }, [activeTabs, router])

    return (
        <div className="bottomNav">
            <div className="bnTab">
                {activeTabs === 'home' ?
                    <RiHomeSmile2Fill
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('home')}
                    /> :
                    <RiHomeSmile2Line
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('home')}
                    />}
            </div>
            <div className="bnTab">
                {activeTabs === 'indonesia' ?
                    <RiSearchEyeFill
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('indonesia')}
                    /> :
                    <BiSearchAlt
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('indonesia')}
                    />}
            </div>
            <div className="bnTab">
                {activeTabs === 'saved' ?
                    <AiFillHeart
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('saved')}
                    /> :
                    <AiOutlineHeart
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('saved')}
                    />}
            </div>
            <div className="bnTab">
                {activeTabs === 'account' ?
                    <RiUser5Fill
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('account')}
                    /> :
                    <RiUser5Line
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('account')}
                    />}
            </div>
        </div>
    )
}

export default BottomNav;