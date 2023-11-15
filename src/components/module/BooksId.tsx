
import { useParams } from "react-router-dom";
import { books } from "../../data/data";

function BooksId() {


    const {id}=useParams()
    const booksAll=books[id-1]
    
  return (
    <div>
        ddddd
    </div>
  )
}

export default BooksId