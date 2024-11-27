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
			<div className='row'>
				<div className='col'>
					<div className='card'>
						<div className='row g-0'>
							<div className='col-5'>
								<img
									src={`http://localhost:3006/imgs/posts/${post?.image}`}
									alt={post?.title}
									className='w-100 h-100'
									style={{ height: '100%', backgroundSize: 'cover' }}
								/>
							</div>
							<div className='col-7'>
								<div className='card-body'>
									<h1 className='card-title text-center'>{post?.title}</h1>
									<p className='card-text mt-4'>{post?.content}</p>
									<p className='card-text mt-4'>{post?.tags?.join(', ')}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
