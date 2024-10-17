import {MdDelete} from 'react-icons/md'
import './index.css'

const Musicitem = props => {
  const {list, deleteList} = props
  const deleteClick = () => {
    deleteList(list.id)
  }
  return (
    <li className="list">
      <div className="part1">
        <div>
          <img src={list.imageUrl} alt="track" className="image" />
        </div>
        <div className="part1-content">
          <p className="title">{list.name}</p>
          <p>{list.genre}</p>
        </div>
      </div>
      <div className="part2">
        <div>
          <p className="duration">{list.duration}</p>
        </div>
        <div>
          <button
            type="button"
            className="delete-button"
            onClick={deleteClick}
            data-testid="delete"
          >
            <MdDelete color="#fff" size={30} />
          </button>
        </div>
      </div>
    </li>
  )
}
export default Musicitem
