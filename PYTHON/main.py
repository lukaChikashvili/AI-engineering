

class Shape:
    def ___init__(self, color, is_filled):
        self.color = color
        self.is_filled = is_filled



class Circle:
    def __init__(self, color, is_filled, radius):
       super().__init__(color, is_filled) 
       self.radius = radius

       
