from django.shortcuts import render
from rest_framework   import viewsets
from .models import Memo
from .serializers import MemoSerializer

# Create your views here.
class MemoViewSet(viewsets.ModelViewSet):
	"""
	API endpoint that allows memos to be viewed and edited

	"""
	queryset = Memo.objects.all()
	serializer_class = MemoSerializer
