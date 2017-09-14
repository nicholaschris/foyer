from django.test import TestCase
from django.core.exceptions import ValidationError

from posts.models import Post
from authentication.models import Account


class PostModelsTest(TestCase):

    def test_one_plus_one(self):
        self.assertEqual(1 + 1, 2)

    def test_post_can_be_saved_and_is_related_to_author(self):
        author = Account.objects.create_user(email="a@b.com",
                                             username="a", password="abc")
        content = "This is a test"
        post = Post.objects.create(author=author, content=content)
        self.assertIn(post, author.post_set.all())

    def test_cannot_save_empty_post(self):
        author = Account.objects.create_user(email="a@b.com",
                                             username="a", password="abc")
        content = ""
        post = Post.objects.create(author=author, content=content)
        with self.assertRaises(ValidationError):
            post.save()
            post.full_clean()

    def test_order_of_post(self):
        author = Account.objects.create_user(email="a@b.com",
                                             username="a", password="abc")
        item1 = Post.objects.create(author=author, content='item 1')
        item2 = Post.objects.create(author=author, content='item 2')
        item3 = Post.objects.create(author=author, content='item 3')
        self.assertEqual(
                list(Post.objects.all()),
                [item1, item2, item3]
            )
