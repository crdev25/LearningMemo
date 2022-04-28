from django.test    import TestCase
from unittest       import skip

from .test_base     import TestBase

class MemoModelTestCase(TestBase, TestCase):
	""" Test Memo Model """

	@classmethod
	def setUpTestData(cls):
		""" Initialization 

		1. Create Memo object for the class MemoModelTestCase

		"""

		## create Memo object memo01
		subject = "React"
		title   = "What Is React? "
		note    = "React is a declarative, efficient, and flexible JavaScript library for building user interfaces."
		cls.memo01_modelObj = cls.create_memo_object(subject, title, note) 


	def setUp(self):
		super().setUp()


	def test_create_new_memo(self):
		subject = "React"
		title   = "React installation "
		note    = "https://reactjs.org/docs/getting-started.html"
		memo02_modelObj = self.create_memo_object(subject, title, note) 
		self.assertTrue(memo02_modelObj)


	def test_update_memo(self):
		MemoModelTestCase.memo01_modelObj.note = "This is React memo"
		MemoModelTestCase.memo01_modelObj.save()
		self.assertEqual(MemoModelTestCase.memo01_modelObj.note, "This is React memo", "memo01 not updated successfully")


	def tearDown(self):
		super().tearDown()


	@classmethod
	def tearDownClass(cls):
		""" Clear Data """
		super().tearDownClass()
