import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faX } from '@fortawesome/free-solid-svg-icons'
import ReactModal from 'react-modal';

import './UpperBar.css'

import SearchBar from './SearchBar';
import Login from '../Login';
import Register from '../Register';

const loginModalStyles = {
	content: {
	  top: '50%',
	  left: '50%',
	  right: 'auto',
	  bottom: 'auto',
	  marginRight: '-50%',
	  transform: 'translate(-50%, -50%)',
	  padding: '0',
	},
};

ReactModal.setAppElement('#root');

function UpperBar (props) {
	const username = sessionStorage.getItem('username');
	const navigate = useNavigate()
	const [searchResults, setResults] = useState([]);

	function onclUpperBarUserBtn (){
		if (username){
			sessionStorage.setItem('username', '');
			window.location.href = '2HandWarehouse/Home';
		}
		else {
			openModal('login');
			// navigate('Login');
		}
	}

	let subtitle;
	const [ModalLoginIsOpen, setModalLoginIsOpen] = React.useState(false);
	const [ModalRegisterIsOpen, setModalRegisterIsOpen] = React.useState(false);

	function openModal(selection) {
		if (selection=="login"){
			setModalLoginIsOpen(true);
		}
		else{
			setModalRegisterIsOpen(true);
		}
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = 'red';
	}

	function closeModal(selection) {
		if (selection=="login"){
			setModalLoginIsOpen(false);
		}
		else{
			setModalRegisterIsOpen(false);
		}
	}

	return (
		<div className='UpperBar'>
			<div id='upperControlsBar'>
				<Link to="/2HandWarehouse/Home">
					<div className='UpperbarHomeButton'>
						<div id='upBar_Logo'>
							<div id='logoRedCircle'>
								<div id='logoNumber'>2</div>
							</div>
							<div id='logoText'>hand</div>
						</div>
					</div>
				</Link>

				<SearchBar outputSetter={setResults} />

				<div className='upperBarBtns'>
					<button id="cartBtn" onClick={null}><FontAwesomeIcon icon={faCartShopping} /></button>
					<button className='BarLoginButton' onClick={onclUpperBarUserBtn}><FontAwesomeIcon icon={faUser} />{(username) ? username: 'Sign in'}</button>
				</div>
			</div>

			<div id='navBar'>
				<Link to='/2HandWarehouse/Home'>Home</Link>
				<Link to='/2HandWarehouse/'>Shop</Link>
				<Link to='/2HandWarehouse/'>Blog</Link>
				<Link to='/2HandWarehouse/'>Contacts</Link>
				<Link to='/2HandWarehouse/'>About Us</Link>
				<Link to='/2HandWarehouse/PostItem'>[T]Post item</Link>
			</div>

			<ReactModal
				isOpen={ModalLoginIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={()=>closeModal('login')}
				style={loginModalStyles}
				contentLabel="Login Modal"
			>
			<div id='loginModal'>
				<div id='modalImg'>
					fff   
				</div>

				<div id='loginModalBody'>
					<button className='modalCloseBtn' onClick={()=>closeModal('login')}><FontAwesomeIcon icon={faX}/></button>
					<Login/>
					<div id='loginModal_registerSection'>
						<span>New member ?</span>
						<button id='openRegisModalBtn' onClick={()=>{
							closeModal('login'); 
							openModal('register');
						}}>
							Register now
						</button>
					</div>
				</div>
			</div>
			</ReactModal>

			<ReactModal
				isOpen={ModalRegisterIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={()=>closeModal('register')}
				style={loginModalStyles}
				contentLabel="Register Modal"
			>
			<div id='registerModal'>
				<div id='modalImg'>
					fff   
				</div>

				<div id='registerModalBody'>
					<button className='modalCloseBtn' onClick={()=>closeModal('register')}><FontAwesomeIcon icon={faX}/></button>
					<Register/>
					<div id='loginModal_registerSection'>
						<span>Already a member ?</span>
						<button id='openRegisModalBtn' onClick={()=>{
							closeModal('register'); 
							openModal('login');
						}}>
							Sign in
						</button>
					</div>
				</div>
			</div>
			</ReactModal>
		</div>
	);
}

export default UpperBar;