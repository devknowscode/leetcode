cmake_minimum_required(VERSION 3.16.5)
project(leetcode_cpp)

set(
    SOURCE_FILES 
    Source/main.cpp
    Source/Algorithms/1.two-sum.cpp
)

add_executable(${PROJECT_NAME} ${SOURCE_FILES})