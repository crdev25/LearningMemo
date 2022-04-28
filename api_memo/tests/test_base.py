from django.contrib.auth.models import User

from api_memo.models            import Memo

class TestBase:
	
	@staticmethod
	def create_memo_object(subject, title, note):
		""" Create Memo Object """

		memo_modelObj = Memo.objects.create(subject=subject, title=title, note=note)
		return memo_modelObj

