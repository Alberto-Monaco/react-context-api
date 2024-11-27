import AppMain from '../components/AppMain'
import { useContext } from 'react'
import PostsContext from '../context/PostsContext'

export default function PostsList() {
	const { articles, addArticle, handleFormField, formData, deleteArticle } = useContext(PostsContext)

	return (
		<>
			<div className='container'>
				<AppMain
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
