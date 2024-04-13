from rest_framework import serializers
from . import models

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Teacher
        fields = ['id', 'full_name', 'email', 'qualification', 'mobile_no', 'address']

# class CourseCategorySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = models.CourseCategory
#         fields = ['id', 'title', 'description']

# class CourseSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = models.Course
#         fields = ['id', 'category', 'teacher', 'title', 'description']

# class StudentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = models.Student
#         fields = ['id', 'full_name', 'email', 'qualification', 'mobile_no', 'address', 'interested_cat']
