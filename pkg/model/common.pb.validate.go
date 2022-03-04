// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: pkg/model/common.proto

package model

import (
	"bytes"
	"errors"
	"fmt"
	"net"
	"net/mail"
	"net/url"
	"regexp"
	"sort"
	"strings"
	"time"
	"unicode/utf8"

	"google.golang.org/protobuf/types/known/anypb"
)

// ensure the imports are used
var (
	_ = bytes.MinRead
	_ = errors.New("")
	_ = fmt.Print
	_ = utf8.UTFMax
	_ = (*regexp.Regexp)(nil)
	_ = (*strings.Reader)(nil)
	_ = net.IPv4len
	_ = time.Duration(0)
	_ = (*url.URL)(nil)
	_ = (*mail.Address)(nil)
	_ = anypb.Any{}
	_ = sort.Sort
)

// Validate checks the field values on ApplicationGitPath with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *ApplicationGitPath) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on ApplicationGitPath with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// ApplicationGitPathMultiError, or nil if none found.
func (m *ApplicationGitPath) ValidateAll() error {
	return m.validate(true)
}

func (m *ApplicationGitPath) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if m.GetRepo() == nil {
		err := ApplicationGitPathValidationError{
			field:  "Repo",
			reason: "value is required",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if all {
		switch v := interface{}(m.GetRepo()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, ApplicationGitPathValidationError{
					field:  "Repo",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, ApplicationGitPathValidationError{
					field:  "Repo",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetRepo()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return ApplicationGitPathValidationError{
				field:  "Repo",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if !_ApplicationGitPath_Path_Pattern.MatchString(m.GetPath()) {
		err := ApplicationGitPathValidationError{
			field:  "Path",
			reason: "value does not match regex pattern \"^[^/].+$\"",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	// no validation rules for ConfigPath

	// no validation rules for ConfigFilename

	// no validation rules for Url

	if len(errors) > 0 {
		return ApplicationGitPathMultiError(errors)
	}

	return nil
}

// ApplicationGitPathMultiError is an error wrapping multiple validation errors
// returned by ApplicationGitPath.ValidateAll() if the designated constraints
// aren't met.
type ApplicationGitPathMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m ApplicationGitPathMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m ApplicationGitPathMultiError) AllErrors() []error { return m }

// ApplicationGitPathValidationError is the validation error returned by
// ApplicationGitPath.Validate if the designated constraints aren't met.
type ApplicationGitPathValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ApplicationGitPathValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ApplicationGitPathValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ApplicationGitPathValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ApplicationGitPathValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ApplicationGitPathValidationError) ErrorName() string {
	return "ApplicationGitPathValidationError"
}

// Error satisfies the builtin error interface
func (e ApplicationGitPathValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sApplicationGitPath.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ApplicationGitPathValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ApplicationGitPathValidationError{}

var _ApplicationGitPath_Path_Pattern = regexp.MustCompile("^[^/].+$")

// Validate checks the field values on ApplicationGitRepository with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *ApplicationGitRepository) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on ApplicationGitRepository with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// ApplicationGitRepositoryMultiError, or nil if none found.
func (m *ApplicationGitRepository) ValidateAll() error {
	return m.validate(true)
}

func (m *ApplicationGitRepository) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if utf8.RuneCountInString(m.GetId()) < 1 {
		err := ApplicationGitRepositoryValidationError{
			field:  "Id",
			reason: "value length must be at least 1 runes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	// no validation rules for Remote

	// no validation rules for Branch

	if len(errors) > 0 {
		return ApplicationGitRepositoryMultiError(errors)
	}

	return nil
}

// ApplicationGitRepositoryMultiError is an error wrapping multiple validation
// errors returned by ApplicationGitRepository.ValidateAll() if the designated
// constraints aren't met.
type ApplicationGitRepositoryMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m ApplicationGitRepositoryMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m ApplicationGitRepositoryMultiError) AllErrors() []error { return m }

// ApplicationGitRepositoryValidationError is the validation error returned by
// ApplicationGitRepository.Validate if the designated constraints aren't met.
type ApplicationGitRepositoryValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ApplicationGitRepositoryValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ApplicationGitRepositoryValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ApplicationGitRepositoryValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ApplicationGitRepositoryValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ApplicationGitRepositoryValidationError) ErrorName() string {
	return "ApplicationGitRepositoryValidationError"
}

// Error satisfies the builtin error interface
func (e ApplicationGitRepositoryValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sApplicationGitRepository.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ApplicationGitRepositoryValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ApplicationGitRepositoryValidationError{}

// Validate checks the field values on ApplicationInfo with the rules defined
// in the proto definition for this message. If any rules are violated, the
// first error encountered is returned, or nil if there are no violations.
func (m *ApplicationInfo) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on ApplicationInfo with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// ApplicationInfoMultiError, or nil if none found.
func (m *ApplicationInfo) ValidateAll() error {
	return m.validate(true)
}

func (m *ApplicationInfo) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Id

	if utf8.RuneCountInString(m.GetName()) < 1 {
		err := ApplicationInfoValidationError{
			field:  "Name",
			reason: "value length must be at least 1 runes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if _, ok := ApplicationKind_name[int32(m.GetKind())]; !ok {
		err := ApplicationInfoValidationError{
			field:  "Kind",
			reason: "value must be one of the defined enum values",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	// no validation rules for Labels

	if utf8.RuneCountInString(m.GetRepoId()) < 1 {
		err := ApplicationInfoValidationError{
			field:  "RepoId",
			reason: "value length must be at least 1 runes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if !_ApplicationInfo_Path_Pattern.MatchString(m.GetPath()) {
		err := ApplicationInfoValidationError{
			field:  "Path",
			reason: "value does not match regex pattern \"^[^/].+$\"",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	// no validation rules for ConfigFilename

	if utf8.RuneCountInString(m.GetPipedId()) < 1 {
		err := ApplicationInfoValidationError{
			field:  "PipedId",
			reason: "value length must be at least 1 runes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	// no validation rules for Description

	// no validation rules for EnvName

	if len(errors) > 0 {
		return ApplicationInfoMultiError(errors)
	}

	return nil
}

// ApplicationInfoMultiError is an error wrapping multiple validation errors
// returned by ApplicationInfo.ValidateAll() if the designated constraints
// aren't met.
type ApplicationInfoMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m ApplicationInfoMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m ApplicationInfoMultiError) AllErrors() []error { return m }

// ApplicationInfoValidationError is the validation error returned by
// ApplicationInfo.Validate if the designated constraints aren't met.
type ApplicationInfoValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ApplicationInfoValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ApplicationInfoValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ApplicationInfoValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ApplicationInfoValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ApplicationInfoValidationError) ErrorName() string { return "ApplicationInfoValidationError" }

// Error satisfies the builtin error interface
func (e ApplicationInfoValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sApplicationInfo.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ApplicationInfoValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ApplicationInfoValidationError{}

var _ApplicationInfo_Path_Pattern = regexp.MustCompile("^[^/].+$")
