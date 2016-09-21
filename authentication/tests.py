from django.test import TestCase
from django.contrib.auth import get_user_model

from authentication.models import Account
# Create your tests here.
User = get_user_model()

class UserModelTest(TestCase):

    def test_user_is_valid_with_email_and_password_and_username(self):
        user = User(email="a@b.com", password="abc", username="a")
        user.full_clean()

    def test_is_authenticated(self):
        user = User()
        self.assertTrue(user.is_authenticated())

    def test_create_user(self):
        user = Account.objects.create(email="a@b.com", password="abc", username="a")
        self.assertIn(user, Account.objects.all())

    def test_is_authenticated(self):
        user = Account.objects.create(email="a@b.com", password="abc", username="a")
        self.assertTrue(user.is_authenticated())
