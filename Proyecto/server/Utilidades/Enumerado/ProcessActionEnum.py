from enum import Enum

class ProcessActionEnum(int, Enum):
    Loaded = 0
    Add = 1
    Delete = 2
    Update = 3
