#aggregation Aggregation is one of the ways objects relate to each other in OOP — 
# specifically, it's a "has-a" relationship where one object contains or uses another 
# object, but the contained object can exist independently of the container.

class Library:
    def __init__(self, name):
        self.name = name
        self.books = []

    def add_book(self, book):
        self.books.append(book)


    def list_books(self):
        return [f"{book.title} by {book.author}" for book in self.books]

class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author


library = Library("zugdidi library")

book1 = Book("harry potter", "j.k.rowling")

library.add_book(book1)


# composition - 