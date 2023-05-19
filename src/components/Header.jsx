import { FaGithub, FaAngleDown, FaLocationArrow } from 'react-icons/fa'
import { Box, Input } from '@chakra-ui/react';

function Header() {
	return (
		<header className="pt-4 flex flex-row justify-around items-center">
			<ul className="content flex flex-row gap-5 items-center">
				<li><FaGithub size={"30px"} /></li>
				<li className="flex flex-row gap-1.5 items-center">Product <FaAngleDown size={"13px"} className="opacity-60" /> </li>
				<li className="flex flex-row gap-1.5 items-center">Solutions <FaAngleDown size={"13px"} className="opacity-60" /> </li>
				<li className="flex flex-row gap-1.5 items-center">Open Source <FaAngleDown size={"13px"} className="opacity-60" /> </li>
				<li>Pricing</li>
			</ul>
			<ul className="auth flex flex-row gap-5 items-center">
				<Box px="10px" py="6px" border='2px' borderStyle="solid" width="200px" borderColor="gray.400" borderRadius="5px" backgroundColor="gray.700" backdropBlur="10px" display="flex" alignItems="center" justifyContent="space-between" opacity="0.5" ><span>Search Github</span> <FaLocationArrow size={"13px"} /></Box>
				<li>Sign up</li>
				<Box border="2px" borderStyle={"solid"} borderColor="white" p={"5px"} borderRadius={"5px"}>Sign up</Box>
			</ul>
		</header>
	);
}

export default Header
