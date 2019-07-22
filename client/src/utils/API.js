import axios from 'axios';

export default {

    // all books
    getBooks: function() {
        return axios.get('/api/books');
    },

    //get book with target id
    getBook: function(id) {
        return axios.get('api/books/' + id);
    },
    // deletes book with target id
    deleteBook: function(id) {
      return axios.delete('/api/books/' + id);
    },
    // saves book to the database
    saveBook: function(bookData) {
      return axios.post('/api/books', bookData);
    }
};