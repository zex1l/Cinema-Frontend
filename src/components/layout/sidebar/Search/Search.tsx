'use client'
import { FC } from 'react'
import styles from './Search.module.scss'
import { useSearch } from './useSearch'
import SearchList from './SearchList/SearchList'
import SearcField from '@/components/ui/search-field/SearcField'

const Search: FC = () => {
	const { data, handlerSearch, isSuccess, searchTerm } = useSearch()

	return (
		<div className={styles.wrapper}>
			<SearcField handleSearch={handlerSearch} searchTerm={searchTerm} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	)
}

export default Search
