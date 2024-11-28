import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './Navbar'
export default function PostDetail() {
	const { slug } = useParams()
	const url = `http://localhost:3006/posts/${slug}`
	const [post, setPost] = useState(null)
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setPost(data)
			})
			.catch((err) => console.log(err))
	}, [slug])

	return (
		<div className='container mt-4'>
			<div className='row justify-content-center'>
				<div className='col-8'>
					<div className='card'>
						<img
							src={`http://localhost:3006/imgs/posts/${post?.image}`}
							alt={post?.title}
							className='card-img'
							style={{ backgroundImage: 'cover', maxHeight: '400px' }}
						/>
						<div className='card-body'>
							<h1 className='card-title text-center'>{post?.title}</h1>
							<p className='card-text mt-4'>{post?.content}</p>
							<p className='card-text mt-4'>{post?.tags?.join(', ')}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
