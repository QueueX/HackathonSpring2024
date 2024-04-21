package com.example.authenticationservice.entity

import jakarta.persistence.*
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails
import java.util.*

@Entity
@Table(name = "Users")
class UserEntity : UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    var id: UUID? = null

    @Column(unique = true, nullable = false)
    var email: String? = null

    @Column(unique = true, nullable = false)
    var login: String? = null

    @Column(name = "password", nullable = false)
    var authPassword: String? = null

    @Column(nullable = false)
    var role: Role? = null

    @OneToOne
    @JoinColumn(name = "team_id", referencedColumnName = "id")
    var teamId: TeamEntity? = null

    override fun getAuthorities(): MutableCollection<out GrantedAuthority> =
        mutableListOf(SimpleGrantedAuthority(role?.name))

    override fun getPassword() = authPassword
    override fun getUsername() = this.login

    override fun isAccountNonExpired(): Boolean = true
    override fun isAccountNonLocked(): Boolean = true
    override fun isEnabled() = true
    override fun isCredentialsNonExpired(): Boolean = true

}