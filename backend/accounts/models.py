from django.db import models

class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=200,null=False,blank=False)
    last_name = models.CharField(max_length=200,null=False,blank=False)
    email = models.EmailField()
    password = models.CharField(max_length=100,null=False,blank=False)
    def __str__(self):
        return self.first_name
