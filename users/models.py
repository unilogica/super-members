
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLES = (
        ('superadmin', 'Super Admin'),
        ('producer', 'Producer'),
        ('student', 'Student'),
    )
    
    role = models.CharField(max_length=20, choices=ROLES)
    tenant = models.ForeignKey('tenant.Client', on_delete=models.CASCADE, null=True)
    
    class Meta:
        db_table = 'auth_user'
