from django.db import models

# Create your models here.
class Memo(models.Model):
	subject = models.CharField(max_length=30) 
	title   = models.CharField(max_length=100)
	note    = models.TextField(max_length=300, blank=True)
	# links   = models.CharField(max_length=300, blank=True)  ## for scalability.
	updated = models.DateTimeField(auto_now=True)
	created = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title


