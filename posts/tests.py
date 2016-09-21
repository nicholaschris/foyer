from django.test import TestCase
from posts.models import Post
# Create your tests here.

class PostModelsTest(TestCase):

    def test_one_plus_one(self):
        self.assertEqual(1 + 1, 2) 
