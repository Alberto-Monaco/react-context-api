import PostsList from './PostsList'
import Navbar from './Navbar'
import { useContext } from 'react'
import PostsContext from '../context/PostsContext'

export default function PostsPage({ addArticle, handleFormField, formData, articles, deleteArticle }) {
	return (
		<>
			<Navbar />
			<div className='container'>
				<h3 className='text-center border-1 border rounded-1 bg-success text-white w-25 mx-auto py-3'>I nostri Post</h3>
				<PostsList
					addArticle={addArticle}
					handleFormField={handleFormField}
					formData={formData}
					articles={articles}
					deleteArticle={deleteArticle}
				/>
			</div>
		</>
	)
}
