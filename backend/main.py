
import os
import sys
from django.core.management import execute_from_command_line

def main():
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.config.settings')
    sys.path.append(os.path.dirname(os.path.abspath(__file__)))
    execute_from_command_line(sys.argv)

if __name__ == "__main__":
    main()
