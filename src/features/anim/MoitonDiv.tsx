'use client'

import { motion } from 'framer-motion';

const MotionDiv = motion.div;

// 이렇게 해주면, 오로지 클라이언트측에서 렌더링되는 것은 motion.div이다. 이 MotionDiv의 자식으로 오는 엘리먼트는 여전히 서버측에서 렌더링된다.

export default MotionDiv;