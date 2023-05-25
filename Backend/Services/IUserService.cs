﻿using Backend.Enums;
using Backend.Model;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Services;

public interface IUserService
{
    public Task<Boolean> Login(string username, string password);

    public Task<Boolean> Register(string username, string password);

    public Task<Dictionary<string, UserLevel>> GetAllUsers();

    public Task<Boolean> UpdateUser(User user);

}