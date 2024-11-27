import PostsList from './PostsList'

export default function PostsPage() {
	return (
		<>
			<div className='container'>
				<h3 className='text-center border-1 border rounded-1 bg-success text-white w-25 mx-auto py-3'>I nostri Post</h3>
				<PostsList />
			</div>
		</>
	)
}
