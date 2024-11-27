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
		<>
			<div className='container'>
				<div className='column '>
					<div className='col-md-6'>
						<div className='card'>
							<div className='card-title'>
								<h1 className='text-center'>{post?.title}</h1>
							</div>
							<div className='card-img text-center'>
								<img src={`http://localhost:3006/imgs/posts/${post?.image}`} alt={post?.title} width={300} />
							</div>
							<div className='card-body'>
								<div className='mt-4'>{post?.content}</div>
								<div className='mt-4'>{post?.tags.join(', ')}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
